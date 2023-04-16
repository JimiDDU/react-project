import "../App.css";

function Itemcard({firstname, lastname, email, number, age, dob, salary, add, image}) {
  return (
    <div className="main">
            <div className="itemcard">
        <div className="top">
            <div className="image2">
                <img src={image} alt="my profile photo" />
            </div>
            <div className="details">
                <div className="name">
                    {firstname} {lastname}
                </div>
                <div className="email">
                    {email}
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="details2">
                <ul>
                    <li>Contact Number : {number}</li>
                    <li>Age : {age}</li>
                    <li>DOB : {dob}</li>
                    <li>Salary : $ {salary}M</li>
                    <li>Address : {add}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Itemcard