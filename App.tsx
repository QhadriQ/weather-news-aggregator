import React,{useState,createContext,useContext}from'react';
import{View,Text,TextInput,TouchableOpacity,ScrollView,StyleSheet}from'react-native';
const AppContext=createContext();
const cities={hyderabad:{name:'Hyderabad',temp:28,humidity:70,wind:2.5},mumbai:{name:'Mumbai',temp:30,humidity:80,wind:3.2},delhi:{name:'Delhi',temp:26,humidity:60,wind:2.8},bangalore:{name:'Bangalore',temp:22,humidity:65,wind:2.0}};
const WeatherCard=()=>{
const{city,setCity,weather,setWeather}=useContext(AppContext);
const search=()=>{const data=cities[city.toLowerCase()]||{name:city,temp:25,humidity:65,wind:2.5};setWeather(data);};
return<View style={s.card}><TextInput style={s.input}placeholder="Enter city"value={city}onChangeText={setCity}onSubmitEditing={search}/><TouchableOpacity style={s.btn}onPress={search}><Text style={s.btnText}>Search</Text></TouchableOpacity><Text style={s.location}>{weather.name}, IN</Text><Text style={s.temp}>{weather.temp}°C</Text><View style={s.details}><Text>Humidity: {weather.humidity}%</Text><Text>Wind: {weather.wind} m/s</Text></View></View>;
};
const Forecast=()=>{
const{weather}=useContext(AppContext);
const days=['Today','Tomorrow','Wed','Thu','Fri'];
const temps=[weather.temp,weather.temp+2,weather.temp-1,weather.temp+1,weather.temp+3];
return<View style={s.card}><Text style={s.title}>5-Day Forecast</Text>{days.map((d,i)=><View key={i}style={s.row}><Text>{d}</Text><Text>{Math.round(temps[i])}°</Text><Text>Sunny</Text></View>)}</View>;
};
const News=()=>{
const{weather}=useContext(AppContext);
const news=weather.temp>25?{title:'Heat Wave Warning',desc:'High temperatures reported'}:weather.temp<15?{title:'Cold Weather Alert',desc:'Low temperatures expected'}:{title:'Perfect Weather',desc:'Ideal conditions today'};
return<View style={s.card}><Text style={s.title}>Weather News</Text><Text style={s.newsTitle}>{news.title}</Text><Text>{news.desc}</Text></View>;
};
const HomeScreen=()=><ScrollView style={s.container}><WeatherCard/><Forecast/><News/></ScrollView>;
const SettingsScreen=()=>{
const[unit,setUnit]=useState('C');
return<ScrollView style={s.container}><View style={s.card}><Text style={s.title}>Temperature Unit</Text><View style={s.row}><TouchableOpacity style={[s.btn,unit==='C'&&s.active]}onPress={()=>setUnit('C')}><Text>Celsius</Text></TouchableOpacity><TouchableOpacity style={[s.btn,unit==='F'&&s.active]}onPress={()=>setUnit('F')}><Text>Fahrenheit</Text></TouchableOpacity></View></View></ScrollView>;
};
const App=()=>{
const[tab,setTab]=useState('home');
const[city,setCity]=useState('hyderabad');
const[weather,setWeather]=useState(cities.hyderabad);
return<AppContext.Provider value={{city,setCity,weather,setWeather}}><View style={s.app}><View style={s.header}><Text style={s.headerText}>Weather News</Text></View>{tab==='home'?<HomeScreen/>:<SettingsScreen/>}<View style={s.tabs}><TouchableOpacity style={[s.tab,tab==='home'&&s.activeTab]}onPress={()=>setTab('home')}><Text>Home</Text></TouchableOpacity><TouchableOpacity style={[s.tab,tab==='settings'&&s.activeTab]}onPress={()=>setTab('settings')}><Text>Settings</Text></TouchableOpacity></View></View></AppContext.Provider>;
};
const s=StyleSheet.create({app:{flex:1,backgroundColor:'#667eea'},header:{backgroundColor:'rgba(255,255,255,0.1)',padding:20,alignItems:'center'},headerText:{color:'#fff',fontSize:20,fontWeight:'bold'},container:{flex:1},card:{backgroundColor:'rgba(255,255,255,0.1)',margin:15,padding:20,borderRadius:15},input:{backgroundColor:'rgba(255,255,255,0.2)',padding:10,borderRadius:8,color:'#fff',marginBottom:10},btn:{backgroundColor:'#4A90E2',padding:10,borderRadius:8,alignItems:'center',marginBottom:10},btnText:{color:'#fff'},location:{color:'#fff',fontSize:16,textAlign:'center'},temp:{color:'#fff',fontSize:48,textAlign:'center',fontWeight:'300'},details:{flexDirection:'row',justifyContent:'space-around',marginTop:15},title:{color:'#fff',fontSize:18,fontWeight:'bold',marginBottom:10},row:{flexDirection:'row',justifyContent:'space-between',paddingVertical:8},newsTitle:{color:'#fff',fontSize:16,fontWeight:'bold',marginBottom:5},tabs:{flexDirection:'row',backgroundColor:'rgba(255,255,255,0.1)'},tab:{flex:1,padding:15,alignItems:'center'},activeTab:{backgroundColor:'rgba(255,255,255,0.2)'},active:{backgroundColor:'#4A90E2'}});
export default App;