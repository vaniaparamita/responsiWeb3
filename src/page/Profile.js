import React, { Component } from 'react';

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="tab-pane active pt-page-scaleUpCenter">
                    <div className="profile-area ">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="profile-img">
                                    <div className="project__card">
                                        <a href="#">
                                            <img className="img-responsive" src="assets/images/profile/ben.png" alt="Kambing" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="profile-info ">
                                    <div className="name">
                                        <h1>Benedict Cumberbatch</h1>
                                        <h4>PROFILE</h4>
                                    </div>
                                    <div className="about-info">
                                        <ul>
                                            <li><i className="flaticon-user"></i><span>Name :</span> Benedict Cumberbatch</li>
                                            <li><i className="flaticon-calendar"></i> <span>Date of birth
                                                    :</span>19 Juli 1976</li>
                                            <li><i className="flaticon-placeholder"></i><span>Address :
                                                </span> Queen Charlotte's and Chelsea Hospital, London, Britania Raya
                                            </li>
                                            <li><i className="flaticon-phone-call"></i> <span>Phone :
                                                </span>+1-222-333-4050</li>
                                            <li><i
                                                    className="flaticon-message"></i><span>Email:</span>doctorstrange@gmail.com
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="objective-area">
                                        <h3>Objective</h3>
                                        <p>Benedict Timothy Carlton Cumberbatch CBE (lahir 19 Juli 1976; umur 42 tahun) adalah seorang aktor Inggris. 
                                            Tokoh-tokoh yang pernah diperankannya meliputi Stephen Hawking di drama BBC Hawking (2004); William Pitt di film sejarah Amazing Grace (2006); 
                                            protagonis Stephen Ezard di miniseri The Last Enemy (2008); Paul Marshall di Atonement (2007); Bernard di Small Island (2009); 
                                            dan Sherlock Holmes di adaptasi modern BBC Sherlock (2010).
                                            Pada bulan Februari 2011, Cumberbatch memerankan Victor Frankenstein dan makhluknya bersama Jonny Lee Miller di adaptasi panggung Frankenstein 
                                            yang disutradarai Danny Boyle. Drama ini dipentaskan selama tiga bulan di Royal National Theatre. Pada akhir 2011, 
                                            ia memerankan Major Stewart di War Horse (2011) besutan Steven Spielberg. Ia juga memerankan Peter Guillam, salah satu peran penting 
                                            dalam Tinker Tailor Soldier Spy (2011) yang disutradarai Tomas Alfredson.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Profile;