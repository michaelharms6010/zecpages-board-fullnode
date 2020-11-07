import React, {useState, useEffect} from "react"
import hexToAscii from "../helpers/hexToAscii"

type Props = {
    threads: object[],
  };

export default function ThreadList(props: Props) {
    console.log(props.threads)
    return (
        <div>
            {props.threads.map(thread => {
                return <div>
                    <h1>{hexToAscii(thread.memo)}</h1>
                </div>
            })}
        </div>
    )

}