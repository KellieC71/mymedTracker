import React from "react";
import API from "../utils/API";
import Modal from 'react-responsive-modal';
import { Alert } from 'reactstrap';

class SaveBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            usersavedMeds: [],
            UserMeds: [],
            visible: false
        }

        this.SetMeds = this.SetMeds.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onOpenModal_SavePattern = () => {
        console.log(this.props.Meds_users);
        this.props.LoadUserMeds;
        this.FindUserMeds();
        this.setState({ open: true });

    };

    onCloseModal_SavePattern = () => {
        this.setState({ open: false });
    };

    SetMeds = () => {
        console.log("press")
        let Meds = this.props.Meds;
        let current_users = this.props.users
        let current_email = this.props.email
        console.log(Meds);
        console.log(current_email);
        console.log(current_users);

        if (!current_email) {
            // this.setState({ visible: true });
            alert("Err: User does not Exist/ You must sign up and sign in to save your pattern")
        }
        else {
            for (var i = 0; i < current_users.length; i++) {
                console.log(current_email[i].Email);
                if (current_email === current_users[i].Email) {
                    API.saveMeds({
                        Email: current_email,
                        Meds: Meds
                    })
                        .catch(err => console.log(err));
                    alert("User Pattern Saved")
                    break;
                }
                else {
                    console.log("user does not exist");
                }
            }
        }


    };

    ClickMeds = (rowIndex, event) => {
        console.log(rowIndex);
        console.log(this.state.usersavedMeds[rowIndex]);

        // this.state.usersavedMeds[rowIndex] = this.props.Meds;

        this.props.clickPadButtons(this.state.usersavedMeds[rowIndex]);

    }

    FindUserMeds = () => {
        let UserMeds = [];
        let rowIndex = 0;
        let button_count = 1;
        let key_count = 0;
        let tempUserMeds = [];
        for (var i = 0; i < this.props.Meds_users.length; i++) {
            if (this.props.email === this.props.Meds_users[i].Email) {
                UserMeds.push(<div><button onClick={this.ClickMeds.bind(this, rowIndex)} key={key_count}> Meds {button_count} </button></div>);
                button_count++;
                tempUserMeds.push(this.props.Meds_users[i].Meds);
                rowIndex++;
                key_count++;
            }

        }
        this.setState({ UserMeds: UserMeds });
        this.setState({ usersavedMeds: tempUserMeds });
        console.log(this.state.UserMeds);
        console.log(this.state.usersavedMeds);
    }

    onDismiss() {
        this.setState({ visible: false });
    }



    render() {
        const { open } = this.state;
        return (
            <div>
                <button className="Save_Btn" onClick={this.SetMeds}> Save Pattern </button>
                <button onClick={this.onOpenModal_SavePattern}> Load Pattern </button>
                <Modal open={open} onClose={this.onCloseModal_SavePattern} little>
                    <p>Save your sequence</p>
                    {this.state.UserMeds}
                </Modal>
            </div>
        )
    };
}

export default SaveBtn;