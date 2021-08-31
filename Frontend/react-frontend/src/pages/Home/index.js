import { React} from 'react';
import '../../services/FeedbackServices'
import PostForm from '../../components/PostForm';


export default function Page() {
    return (
        <div>{<PostForm />}</div>

        
    );
}