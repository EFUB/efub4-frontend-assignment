import client from ".";

export const Write = async (request, image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        formData.append(
            'request',
            new Blob([JSON.stringify(request)], { type: 'application/json' })
        );

        const res = await client.post('/posts', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        console.log(res);
    } catch (err) {
        console.log(err);
    }
}