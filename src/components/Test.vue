<template>
    <div>
       <input v-model ='parsedData.seconds'/>
       <input v-model ='parsedData.minutes'/>
       <input v-model ='parsedData.hours'/>
       <input v-model ='parsedData.days'/>
       <input v-model ='parsedData.months'/>
       <input v-model ='parsedData.years'/>
<p> {{formattedValue}}</p>
    </div>
</template>
<script>
import {parseIso} from '../utils/parse'
import {Format} from '../utils/format'
export default {
    data: function() {
        return{
parsedData: parseIso(this.value)
        } 
    },
    props:{ 
        value: {
            type:String,
            required: true,    
            },
        },
        computed:{
           formattedValue(){
                return Format(this.parsedData)
}
}
}
</script> 


