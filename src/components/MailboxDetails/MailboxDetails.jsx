import { useParams } from "react-router";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    if (Number(mailboxId) > props.mailboxes.length) {
        return (<h2>Whoops, Mailbox Not Found!</h2>);
    }

    const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        < >
            <h2>Mailbox {selectedBox._id}</h2>
            <h3>Details</h3>
            <dl>
                <dt>Boxholder:</dt>
                <dd>{selectedBox.name}</dd>
                <br />
                <dt>box number:</dt>
                <dd>{selectedBox._id}</dd>
                <br />
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;