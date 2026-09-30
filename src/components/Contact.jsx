function Contact(props) {
  const fallbackImage = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80';

  return (
    <div className="contact">
      <div className="contact-img">
        <img src={props.image || fallbackImage} alt={props.name || 'Contact'} />
      </div>
      <div className="contact-detail">
        <h1>{props.name}</h1>
        <div className="phone-no">
          <div className="phone-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="Phone Logo" />
          </div>
          <p>{props.phoneNo}</p>
        </div>
        <div className="email">
          <div className="email-logo">
            <img src="https://cdn-icons-png.flaticon.com/512/646/646135.png" alt="Email Logo" />
          </div>
          <p>batman@gotham.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;