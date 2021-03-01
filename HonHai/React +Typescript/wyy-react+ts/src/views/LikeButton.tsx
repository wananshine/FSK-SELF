import React, { useState, useEffect } from 'react';

const LikeButton: React.FC = ()=>{
    const [obj, setObj] = useState({ like: 0, on: true });
    useEffect(()=>{
        document.title = `点击了${obj.like}次`
    });
    return (
        <div>
            <button onClick={()=>{ setObj({ like: obj.like + 1, on: obj.on }) }}>{obj.like}</button>
        </div>
    )
};

export default LikeButton;