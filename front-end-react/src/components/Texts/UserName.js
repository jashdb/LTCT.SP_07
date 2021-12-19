import axios from "axios";
import { useState, useEffect } from "react";

export default function UserName(props) {
    const [name, setName] = useState(null);

    useEffect(() => {
        if (!name) {
            getName(props.userId);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getName = async (userId) => {
        const data = {
            userId: userId,
        }

        const res = await axios.post('/api/getUserInfo', data);
        if (res.data.status === 200) {
            setName(res.data.user.fullname)
        } else {
            setName("- - -")
        }
    }

    return (
        <>
            {name == null ? "Loading..." :
                name
            }
        </>
    )
}