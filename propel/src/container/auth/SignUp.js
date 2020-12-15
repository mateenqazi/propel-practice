import React, { Component } from 'react'
import TextFeild from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import Grid from '@material-ui/core/Grid'

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    change = (e) => {
        console.log('change', [e.target.name], 'value', e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h3>Sign Up for a free account</h3>
                <div style={{ marginLeft: '37%' }}>
                    <form onSubmit={this.submitHandler}>
                        <Grid container spacing={3} >
                            <Grid item   >
                                <TextFeild required className="hard-select-box-cont" type="text" label="First Name" name="firstname" value={this.state.firstName} onChange={this.change} />
                            </Grid>
                            <Grid item >
                                <TextFeild required id="standard-required" type="text" label="Last Name" name="lastname" value={this.state.lastName} onChange={this.change} />
                            </Grid>
                        </Grid>


                        <Grid container >
                            <Box width={415}>
                                <Grid item >
                                    <TextFeild required id="standard-required" type="text" label="Username" fullWidth name="username" value={this.state.userName} onChange={this.change} />
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid container >
                            <Box width={415} >
                                <Grid item  >
                                    <TextFeild required id="standard-required" type="text" label="Email Address" fullWidth name="email" value={this.state.email} onChange={this.change} />
                                </Grid>
                            </Box>

                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item  >
                                <TextFeild required className="hard-select-box-cont" type="text" label="Password" name={this.state.password} value={this.state.password} onChange={this.change} />
                            </Grid>
                            <Grid item>
                                <TextFeild required id="standard-required" type="text" label="Confirm Password" name={this.state.confirmPassword} value={this.state.confirmPassword} onChange={this.change} />
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Box width={415}>
                                <Button variant="contained" color="primary" type="submit" fullWidth>
                                    Primary
                                </Button>
                            </Box>
                        </Grid>



                    </form>
                </div>
            </div >
        )
    }
}

export default SignUp
