import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
    boxSize: 'Medium',
    name: '',
}

const MailboxForm = (props) => {
    const {addBox} = props;
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    }

    const handleChange = ({target}) => {
        setFormData({ ...formData, [target.name]: target.value });
    }
    
    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">BoxSize:</label>
                <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm; 