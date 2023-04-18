const express =require('express');
const app = express();
const PORT = 8000;
app.use(express.static(__dirname));

const rappers ={
    '21 savage' :{
        'age':29,
        'birthName':'Sheya Bin Hose',
        'birthLocation':'London,England'
    },
    'chance the rapper' :{
        'age':29,
        'birthName' : 'Chancelor Bennet',
        'birthLocation':'London,England'
    },
    'unknown' :{
        'age':0,
        'birthName' :'unknown',
        'birthLocation':'unnown'
    }


}

app.get('/',(request,response) =>{
    response.sendFile(__dirname+'/index.html');
});

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase();
    if ( rappers[rapperName]){
        response.json(rappers[rapperName]);
    }
    else {
        response.json(rappers['unknown']);
    }
})

app.listen(process.env.PORT||PORT, ()=>{
    console.log(`Server is Running on port ${PORT}. Better catch it !!!`);
})