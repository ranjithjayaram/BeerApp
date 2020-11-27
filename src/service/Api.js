import API_CONSTANTS from './Constants'

/* class APIService{
    async retrieveItems(){
        return fetch(this.API_CONSTANTS.BASE_URL).then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err)
        })
    }
}

export default APIService; */

export default {
    RetrieveItems: () => {
        return fetch(API_CONSTANTS.BASE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((data) => {
            return data.json();;
        }).catch(err => {
            throw err;
        })
    },

    RetrieveImageData : ()=>{
        return fetch(API_CONSTANTS.IMAGES_URL,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }}).then((data) => {
                return data.json();;
            }).catch(err => {
                throw err;
            })
    }
}