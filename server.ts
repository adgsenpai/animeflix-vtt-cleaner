import express from 'express';
import axios from 'axios';
import fs from 'fs';

const app = express();
const port = 3000;

const cleanHtmlTags = (vttContent: string): string => {
    return vttContent.replace(/<[^>]*>/g, '');
};

app.get('/clean-vtt', async (req, res) => {
    const vttUrl: string = req.query.url as string;

    if (!vttUrl) {
        return res.status(400).send('No URL provided');
    }

    try {
        const response = await axios.get(vttUrl, { responseType: 'text' });
        const vttContent = response.data;

        const cleanContent = cleanHtmlTags(vttContent);

        // make the file downloadable
        res.type('text/vtt').send(cleanContent);        
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching or processing the VTT file');
    }
});

// DEMO RAW FILE

app.get('/demo', async (req, res) => {
    const vttFile = 'example/eng-2.vtt';

    try {
        const vttContent = await fs.promises.readFile(vttFile, 'utf8');
        const cleanContent = cleanHtmlTags(vttContent);

        res.type('text/vtt').send(cleanContent);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching or processing the VTT file');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
