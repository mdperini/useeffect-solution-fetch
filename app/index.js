import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function. 
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body, 
    and a button to fetch the next post on a successful request.
*/

const postIds = [1,2,3,4,5,6,7,8]

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
}

const App = () =>  {
    const [index, setIndex] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)

        fetchPost(postIds[index])
        .then((post) => {
            setPost(post)
            setError(null)
            setLoading(false)
        })
        .catch((e) => {
            console.warn(e.message)
            setError(`Error fetching data. Try again.`)
            setLoading(false)
        })
    }, [index])

    const incrementIndex = () => {
        setIndex((i) =>
            i === postIds.length - 1
            ? i
            : i + 1
        )
    }
        
    if (loading === true) {
        return <p>Loading</p>
    }

    if (error) {
        return (
            <React.Fragment>
                <p>{error}</p>
                <button onClick={incrementIndex}>Next Post</button>        
            </React.Fragment>            
        )
    }

    return (
        <div className='App'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            {index === postIds.length - 1
            ? <p>No more posts</p>
            : <button onClick={incrementIndex}>
                Next Post
            </button>
            }
        </div>
    )
}

const rootElement = document.getElementById('root');  
ReactDOM.render(<App />, rootElement);