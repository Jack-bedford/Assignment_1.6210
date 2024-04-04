import scp from './scp.json';

function SCP4()
{    
    const SCP4 = scp[2];

    return(

        <div className="p-3 rounded ">
           
            <div className='text-center'>
                <img width='100%' class="center" className=" rounded img-fluid" src={SCP4.Image} />
            </div>
        <div key={SCP4.Item}>
            <div className="middle-fade p-2 pb-1 mt-3 mb-1 rounded text-left text-dark">
                <h2>{SCP4.Item}</h2>
            </div>
            <div className="smaller-fade p-1 pb-1 rounded text-left text-dark">
                <h3>{SCP4.Name}</h3>
            </div>
            <div className="middle-fade-Euclid p-1 pb-1 my-1 rounded text-left text-dark ">
                <h3>Object Class: {SCP4.Class}</h3>
            </div>
            <h4 className="my-3 p-3 border text-info rounded shadow border-info text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">Special  Containment Procedures</h4>
            <div class="collapse" id="collapse1">
            <div class="card card-body text-black border border-info">
            <p>{SCP4.Containment}</p>
            </div>
            </div>
            
            

            <h4 className="my-3 p-3 border text-info rounded shadow border-info text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Description</h4>
            <p>
            </p>
            <div class="collapse" id="collapse2">
            <div class="card card-body text-black border border-info">
            <p>{SCP4.Description}</p>

            </div>
            </div>
        </div>
    </div>
    );
}



export default SCP4;
