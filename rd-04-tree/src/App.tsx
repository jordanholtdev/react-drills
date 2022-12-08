import { useState } from 'react';
import './App.css';

const files = {
    children: [
        {
            name: 'node_modules',
            children: [
                {
                    name: 'chakra-ui',
                },
            ],
        },
        {
            name: 'package.json',
        },
        {
            name: 'vite.config.ts',
        },
        {
            name: 'eslint.config',
        },
        {
            name: 'assets',
            children: [
                {
                    name: 'photos',
                    children: [
                        {
                            name: 'profile-photos',
                            children: [
                                {
                                    name: 'pic-1.jpg',
                                },
                                {
                                    name: 'pic-2.jpg',
                                },
                            ],
                        },
                        {
                            name: 'cover-photo.jpg',
                        },
                    ],
                },
            ],
        },
    ],
};

type TEntry = {
    name: string;
    children?: TEntry[];
};

const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            {entry.children ? (
                <button
                    className='entry'
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    📁 {entry.name}
                </button>
            ) : (
                <div>{entry.name}</div>
            )}
            {isExpanded && (
                <div style={{ paddingLeft: `${depth * 10}px` }}>
                    {entry.children?.map((entry, index) => (
                        <Entry entry={entry} depth={depth + 1} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

function App() {
    return (
        <div className='App'>
            <h2>Tree component</h2>
            {files.children.map((entry, Id) => (
                <Entry entry={entry} depth={1} key={Id} />
            ))}
        </div>
    );
}

export default App;
