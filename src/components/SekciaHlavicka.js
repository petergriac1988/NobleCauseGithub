export function SekciaHlavicka() {

    return (
        /*In React, you typically don't need to use <head>, <body>, and <title> tags in your component as these are typically handled outside of React in the public/index.html file of your project. The <title> tag specifically is managed outside of React components and is usually set in the public/index.html file in a Create React App project.*/

        <div className="SekciaHlavicka">
            <div className="hlavicka-title">Žiadosť o ohodnotenie hnuteľného majetku</div>
            <div className="UdajeRequestor">
                <div>Requestor: </div>
                <input type="text" name="Requestor" readOnly />
                <div>Klapka: </div>
                <input type="text" name="Klapka" readOnly />
                <div>Mobil: </div>
                <input type="text" name="Mobil" readOnly />
                <input type="text" name="Oddelenie" readOnly />
            </div>
        </div>

    );
}