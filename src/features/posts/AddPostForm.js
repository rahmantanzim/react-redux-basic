import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {postAdded} from './postsSlice';
const AddPostForm = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const dispatch = useDispatch();
    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)

    const onSavePostClicked = ()=>{
        if(title && content){
            dispatch(
                postAdded(title,content)
            );
            setTitle('');
            setContent('');
        }
        
    }
    return (
    <section>
        <h2>Add new Post</h2>
        <form>
            <label htmlFor='postTitle'>Add Title</label>
            <input
                type='text'
                name='postTitle'
                id='postTitle'
                placeholder='Post Title'
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor='postContent'>Add Content</label>
            <textarea
                name='postContent'
                id='postContent'
                placeholder='Post Content'
                value={content}
                onChange={onContentChange}
            ></textarea>
            <button
                    type="button"
                    onClick={onSavePostClicked}
                >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm