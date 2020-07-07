import React from 'react'
import DropdownMenu from 'react-native-dropdown-menu';
import {ScrollView,Modal, Text, View,TouchableOpacity } from 'react-native';
import {Paragraph,Appbar,Title,Card,Button} from 'react-native-paper';
import {WebView} from 'react-native-webview';

export default class BrowseNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Science',
      data:'',
      newslink:'',
      visible:false
    };
  }
 async componentDidMount(){
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.state.text}&apiKey=5ebeb80273af47329b3a806feb08784f`;
    const res=await fetch(url);
    const data=await res.json();
    this.setState({data:data.articles})
  }
  async fetchNews(text){
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=${text}&apiKey=5ebeb80273af47329b3a806feb08784f`;
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
  render() {
    var data = [["Science", "Technology", "Entertainment", "Business","Sports","Health"]];
    return (
        <>
        <Appbar.Header>
      
      <Appbar.Content
        title="GNews World"
        subtitle="Browse"
      /> 
      
  </Appbar.Header>
  <View style={{flex: 1}}>
      <View style={{height:14}} />
      <DropdownMenu
      style={{flex: 1}}
      bgColor={'white'}
      tintColor={'#666666'}
      activityTintColor={'green'}
      handler={(selection, row) => this.fetchNews(data[selection][row])}
      data={data}
    >
      <ScrollView>
      {(()=>{
          
        if(this.state.data!=''){
          return(
              
          this.state.data.map((item,idx)=>{
            return(
              <>
              <TouchableOpacity onPress={()=>this.handlenews(item.url)}>
              <Card style={{margin:10}} key={idx}>
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
    </DropdownMenu>
      </View>
    <Modal visible={this.state.visible} transparent={false}>
              <Button icon="arrow-left-thick" style={{width:40,backgroundColor:'red'}} onPress={()=>this.hideModal()}/>
            
              <WebView source={{uri:`${this.state.newslink}`}} style={{width:'100%'}}/>
            
    </Modal>
    </>);
  }
  
}
