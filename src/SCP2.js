import scp from './scp.json';

function SCP2()
{    
    const SCP2 = scp[0];

    return(

        <div className="p-3 rounded">
           
            <div className='text-center'>
                <img width='100%' class="center" className=" rounded img-fluid" src={SCP2.Image} />
            </div>
        <div key={SCP2.Item}>
            <div className="middle-fade p-2 pb-1 mt-3 mb-1 rounded text-left text-dark">
                <h2>{SCP2.Item}</h2>
            </div>
            <div className="smaller-fade p-1 pb-1 rounded text-left text-dark">
                <h3>{SCP2.Name}</h3>
            </div>
            <div className="middle-fade-Euclid p-1 pb-1 my-1 rounded text-left text-dark ">
                <h3>Object Class: {SCP2.Class}</h3>
            </div>
            <h4 className="my-3 p-3 border text-info rounded shadow border-info text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">Special  Containment Procedures</h4>
            <div class="collapse" id="collapse1">
            <div class="card card-body text-black border border-info">
            <p>{SCP2.Containment}</p>
            </div>
            </div>
            
            

            <h4 className="my-3 p-3 border text-info rounded shadow border-info text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Description</h4>
            <p>
            </p>
            <div class="collapse" id="collapse2">
            <div class="card card-body text-black border border-info">
            <p>{SCP2.Description}</p>

            </div>
            </div>
           <div className='bg-info col-2 p-1 pb-0 rounded text-center'><p>The above are buttons</p></div>
        </div>
    </div>
    );
}



export default SCP2;
