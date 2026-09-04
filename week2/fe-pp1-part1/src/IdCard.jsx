
function IdCard(props) {
    const { firstName, lastName, gender, height, birth, picture } = props;
    return (
        <div className="id-card">
            <img src={picture} alt={firstName + " " + lastName} />
            <div>
                <p><strong>First name:</strong>  {firstName} </p>
                <p><strong>Last name:</strong> {lastName} </p>
                <p><strong>Gender:</strong> {gender} </p>
                <p><strong>Height:</strong> {height/100}m </p>
                <p><strong>Birth:</strong> {birth.toDateString()} </p>
            </div>
        </div>
    );

}
export default IdCard;