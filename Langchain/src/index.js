import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

async function splitTextFile() {
    try {
        const result = await fetch('./index-info.txt');
        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const text = await result.text();
        
        const splitter = new RecursiveCharacterTextSplitter();
        const output = splitter.createDocuments([text]);
        
        console.log(output);
    } catch (err) {
        console.error('Error:', err);
    }
}

splitTextFile();
