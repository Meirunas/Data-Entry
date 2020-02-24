import React from "react";
import { Container, Row, Col, UncontrolledCollapse, Form, FormGroup, Label, Input, Button, CardBody, Card } from 'reactstrap';
import "./../../sass/style.scss";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first:false,
            sec:false,
            thrid:false,
            value: '',
            f_name:'',
            s_name:'',
            email:'',
            phone:'',
            gender:'0',
            birth:'',
            year:1900,
            month:0,
            day:0,
            com:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        $("#toggler").click();
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        fetch('http://localhost:8000/api/register', {
            method:'post',
            body:JSON.stringify(
                this.state
            ),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }).then(function(result){
            result.json().then(function(res){
                alert(res.status);
            })
        })
        event.preventDefault();
      }
    
      first = () =>{
        if(this.state.first == false){
            this.setState({
                first:true
            })
        }else{
            this.setState({
                first:false
            })
        }
        if(this.state.third==true){
            $("#toggler222").click();
       
            this.setState({
                third:false
            })
        }
        if(this.state.sec==true){
            $("#toggler111").click();
            this.setState({
                sec:false
            })
        }
      }

      second = () => {
      
        if(this.state.first==true){
            if(this.state.f_name ==''){
                alert("Please input First Name");
                return false;
            }
    
            if(this.state.s_name == ''){
                alert("Please input Surname");
                return false;
            }

            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.email) === false)
            {
            alert("Email is Not Correct");
            return false;
            }
            
            $("#toggler").click();
            $("#toggler111").click();
            this.setState({
                first:false,
                sec:true,
            })
        }
      }

      third = () =>{
        var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
        if(regexp.test(this.state.phone) ===false){
          alert("Phone Number is Not Correct");
           return false;
        }else{
          console.log("Phone Number is Correct");
        }
        if(this.state.gender == '0'){
            alert("Please select gender.");
            return false;
        }

        if(Number(this.state.month) >= 1 && Number(this.state.month) <= 12  ){
            
        }else{
            alert("Invalid month");
            return false;
        }
        
        if(this.state.day == '0'){
            alert("Please input day");
            return false;
        }
        if(Number(this.state.day) >= 1 && Number(this.state.day) <= 31  ){
            
        }else{
            alert("Invalid day");
            return false;
        }
        if(this.state.year == ''){
            alert("Please input birthday");
            return false;
        }
        if(Number(this.state.year) > 1900 && Number(this.state.year) < 2100  ){
            
        }else{
            alert("Invalid year");
            return false;
        }

        $("#toggler111").click();
        $("#toggler222").click();
        
        this.setState({
            third:true,
            sec:false
        })
      }

    render() {
        
        return (
            <Container>
                <div className="parent">
                    <div className="child">
                        <Form onSubmit={this.handleSubmit}>
                            <Button id="toggler" onClick={() => this.first()} style={{ marginBottom: '1rem' }}>
                            Step 1: Your details
                            </Button>
                            <UncontrolledCollapse toggler="#toggler">
                            <Card className="card">
                                <CardBody>
                                    <Row>
                                        <Col sm={4}>
                                            <FormGroup>
                                                <Label for="exampleEmail">First Name</Label>
                                                <Input type="text" name="f_name"
                                                autoComplete="off"
                                                onChange={(event) => {
                                                    this.setState({f_name: event.target.value})
                                                }}
                                                id="f_name" placeholder="" />
                                            </FormGroup>
                                        
                                        </Col>
                                        <Col sm={4}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Surname</Label>
                                                <Input type="text" name="s_name"
                                                autoComplete="off"
                                                onChange={(event) => {
                                                    this.setState({s_name: event.target.value})
                                                }}
                                                id="s_name" placeholder="" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email Address</Label>
                                                <Input type="email" autoComplete="off"
                                                name="email"
                                                    onChange={(event) => {
                                                        this.setState({email: event.target.value})
                                                    }}
                                                id="email" placeholder="" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                <Button type="button" id="toggler11" onClick={() => this.second()} style={{ marginBottom: '1rem' }}>Next ></Button>
                                <Button type="button" id="toggler111" style={{display:"none"}}>nt</Button>
                                
                                </CardBody>
                            </Card>
                            </UncontrolledCollapse>

                            <Button type="button" id="toggler1" style={{ marginBottom: '1rem' }}>
                            Step 2: More comments
                            </Button>
                            <UncontrolledCollapse toggler="#toggler111">
                            <Card className="card">
                                <CardBody>
                                    <Row>
                                        <Col sm={4}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Telephone number</Label>
                                                <Input type="text" name="phone"
                                                autoComplete="off"
                                                onChange={(event) => {
                                                    this.setState({phone: event.target.value})
                                                }}
                                                id="phone" placeholder="" />
                                            </FormGroup>
                                        
                                        </Col>
                                        <Col sm={4}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Gender</Label>
                                                <Input type="select" name="select"
                                                autoComplete="off"
                                                onChange={(event) => {
                                                    this.setState({gender: event.target.value})
                                                }}
                                                id="gender">
                                                    <option value="0">Select Gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <Label>Date of birth</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col sm={1}>
                                            <FormGroup>
                                              
                                                <Input type="text" width={10} name="birth"
                                                autoComplete="off"
                                                onChange={(event) => {
                                                    this.setState({day: event.target.value})
                                                }}
                                                style={{padding:"10px 10px"}}
                                                placeholder="Day" />
                                                
                                            </FormGroup>
                                        </Col>
                                        <Col sm={1}>
                                            <FormGroup>
                                              
                                                <Input type="text" name="birth"
                                                autoComplete="off"
                                                onChange={(event) => {
                                                    this.setState({month: event.target.value})
                                                }}
                                                style={{padding:"10px 10px"}}
                                                placeholder="Month" />
                                                
                                            </FormGroup>
                                        </Col>
                                        <Col sm={2}>
                                            <FormGroup>
                                             
                                                <Input type="text" name="birth"
                                                autoComplete="off"
                                                style={{padding:"10px 10px"}}
                                                onChange={(event) => {
                                                    this.setState({year: event.target.value})
                                                }}
                                                id="birth" placeholder="Year" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button type="button" onClick={() => this.third()} id="toggler22" style={{ marginBottom: '1rem' }}>Next ></Button>
                                    <Button type="button" id="toggler222" style={{ marginBottom: '1rem', display:"none" }}>Next ></Button>
                                    
                                </CardBody>
                            </Card>
                            </UncontrolledCollapse>

                            <Button type="button" id="toggler2" style={{ marginBottom: '1rem' }}>
                            Step 3: Final comments
                            </Button>
                            <UncontrolledCollapse toggler="#toggler222">
                            <Card className="card">
                                <CardBody>
                                    <Row>
                                        <Col sm={8}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Comments</Label>
                                                <Input type="textarea" name="text"
                                                    onChange={(event) => {
                                                    this.setState({com: event.target.value})
                                                    }}
                                                    rows={5} id="text" />
                                            </FormGroup>
                                        
                                        </Col>
                                        
                                    </Row>
                                    
                                    <Button type="submit" id="toggler33" style={{ marginBottom: '1rem' }}>Next ></Button>
                                    
                                </CardBody>
                            </Card>
                            </UncontrolledCollapse>
                        </Form>
                    </div>
                
                </div>
            </Container>
          
        );
    }
}

export default Register;
