import { useEffect, useState } from 'react';
import fetchIp from './api/ipaip';
import './App.css';

function App() {
    const [ipInfo, setIpInfo] = useState();
    useEffect(() => {
        fetchIp().then((data) => setIpInfo(data));
    }, []);

    return (
        <div className='App'>
            {ipInfo ? (
                <>
                    <h1>My IP Information</h1>
                    <table className='ipList'>
                        <th>Field</th>
                        <th>Value</th>
                        {Object.keys(ipInfo).map((item: string) => (
                            <tr>
                                <th>{item}</th>
                                <th>{`${ipInfo[item]}`}</th>
                            </tr>
                        ))}
                    </table>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
