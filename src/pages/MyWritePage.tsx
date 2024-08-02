import React, {useEffect, useState} from "react";
import axios from "axios";

function MyWritePage() {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchPosts = async () => {
            axios.get(`http://3.37.252.66:8080/user/user`)
                .then((response) => {
                    if (response.status === 200) {
                        // setData(response.data);
                        console.log(response.data)
                        // console.log('Articles:', response.data);
                        // console.log(articles);
                    } else {
                        alert('Post get failed. Please try again.');
                    }
                })
                .catch(error => {
                    if (error.response) {
                        alert(`Error: ${error.response.data}`);
                    } else {
                        alert('Error during request');
                    }
                });
        };
    }, []);
    return null;
}

export default MyWritePage;