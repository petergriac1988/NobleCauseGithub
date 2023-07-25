export function InformacieUzivatel() {
    
    return (
        /*In React, you typically don't need to use <head>, <body>, and <title> tags in your component as these are typically handled outside of React in the public/index.html file of your project. The <title> tag specifically is managed outside of React components and is usually set in the public/index.html file in a Create React App project.*/

        <div className="InformacieUzivatelContainer">
            <div className="InformacieUzivatel">
                <div>INFORMÁCIE O UŽÍVATEĽOVI</div>
            </div>
            <div className="InformacieUzivatelPolia">
                <label>User Name</label>
                <input type="text" name="UserName" />
                <label>User Account</label>
                <input type="text" name="UserAccount" />
                <label>User Department</label>
                <input type="text" name="UserDepartment" />
                <label>User Role</label>
                <input type="text" name="UserRole" />
                <label>User ID</label>
                <input type="text" name="UserID" />
                <label>User Team</label>
                <input type="text" name="UserTeam" />
            </div>
        </div>

    );
}