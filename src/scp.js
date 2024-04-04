import subjects from './scp.json';

function scp()
{
    const url = new URL(window.location.href);
    const subject = subjects[parseInt(url.searchParams.get('n'))];
    return(
        <div className="p-3 border rounded shadow">
            <h2 id='header1'>Component 1</h2>
            <p>This is a paragraph</p>
            {subject.Item}
            {subject.Class}
            {subject.Containment}
            {subject.Description}
        </div>
    );
}

export default scp;