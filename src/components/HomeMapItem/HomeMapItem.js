import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, Image, Text} from 'react-native'
//styling

class HomeMapItem extends Component {
    state = {
        newName: this.props.char.name,
        newPic: this.props.char.portrait || '',
        name: false,
        open: false,
        portrait: false
    }
    show = (dimmer) => () => this.setState({ ...this.state, dimmer, open: true })
    close = () => this.setState({ ...this.state, open: false })
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    deleteChar = () => {
        this.props.dispatch({ type: 'DELETE_CHARACTER', payload: this.props.char.id })
        this.close()
    }
    changeName = (data) => {
        console.log(data)
        this.props.dispatch({ type: 'CHANGE_NAME', payload: { id: data, name: this.state.newName } })
        this.setState({ ...this.state, name: false, portrait: false })
    }
    changePic = (data) => {
        console.log(data)
        this.props.dispatch({ type: 'CHANGE_PIC', payload: { id: data, portrait: this.state.newPic } })
        this.setState({...this.state,portrait:false})
    }
    toggleEdit = (type) => {
        this.setState({
            [type]: !this.state.edit
        })
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    render() {
        return (
            <View style={{width:'100%', height:'100%', }}>
            <Image style={{width:'40%', height:'auto' }}
             ImageSource={{ uri:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/811a2908-404c-4d71-b6d2-0b4e737898e1/dd7ujlf-d2ef5bf2-a0a8-4578-83e5-f0e01c3b375a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODExYTI5MDgtNDA0Yy00ZDcxLWI2ZDItMGI0ZTczNzg5OGUxXC9kZDd1amxmLWQyZWY1YmYyLWEwYTgtNDU3OC04M2U1LWYwZTAxYzNiMzc1YS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VbDb7DLBgJYYY90Jb7LUq5thiWlyo65M73Q0SX3I-Zw'}}
            />
            <Text >{this.props.char.name}: The {this.props.char.race} {this.props.char.class}</Text>
            </View>
            
        )
    }
}

export default connect()(HomeMapItem);