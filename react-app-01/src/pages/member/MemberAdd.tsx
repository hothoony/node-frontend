import { useState } from "react";

export default function MemberAdd() {

    const [memberName, setMemberName] = useState(undefined);

    const handleAdd = () => {
        console.log('handleAdd');
        console.log('memberName', memberName);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('handleChange event', event);
        console.log(event.target.value);
        // setMemberName(event.target.value);
        // setMemberName('12');
        console.log('memberName', memberName);
    }

    return (
        <div>
            <div>MemberAdd page</div>
            <div>
                <div>
                    <label>memberName
                        <input
                            type="text"
                            value={memberName}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                </div>
                <div>memberEmail</div>
                <div>memberPwd</div>
                <button onClick={handleAdd}>추가</button>
            </div>
        </div>
    );
}
