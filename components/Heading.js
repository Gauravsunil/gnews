import React from 'react';
import {ScrollView,Text,TouchableOpacity,Modal} from 'react-native';
import {Paragraph,Appbar,Title,Card,Button} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import {Icon} from 'react-native-elements'

export default class Heading extends React.Component{
  constructor(){
    super();
    this.state={
      heading:'top-heading',
      data:'',
      newslink:'',
      visible:false
    }
  }
  async componentDidMount(){

    const url='https://newsapi.org/v2/top-headlines?country=in&apiKey=5ebeb80273af47329b3a806feb08784f';
    const res=await fetch(url);
    const data=await res.json();
    this.setState({data:data.articles})
  }

  handlenews(link){
    this.setState({newslink:link,visible:true});

  }
hideModal(){
  this.setState({visible:false});
}
  render(){
    return(
      <>
      <Appbar.Header>
      
          <Appbar.Content
            title="GNews World"
            subtitle="Top-HeadLines"
          /> 
      </Appbar.Header>
      <ScrollView>
        {(()=>{

          if(this.state.data!=''){
            return(
            this.state.data.map(item=>{
              return(
                <>
                <TouchableOpacity onPress={()=>this.handlenews(item.url)}>
                <Card style={{margin:10}}>
                  <Card.Cover source={{ uri: `${item.urlToImage}` }} />
                  <Title style={{margin:10}}>{item.title}</Title>
                  <Card.Content>
                      <Paragraph>{item.description}</Paragraph>
                  </Card.Content>
                </Card>
                </TouchableOpacity>
               
              </>
              )
            })
          )
          }

        })()}
        
      </ScrollView>
      <Modal visible={this.state.visible} transparent={false}>
                <Button icon="arrow-left-thick" style={{width:40,backgroundColor:'red'}} onPress={()=>this.hideModal()}/>
              
                <WebView source={{uri:`${this.state.newslink}`}} style={{width:'100%'}}/>
              
      </Modal>
    </>
    )
  }
}



