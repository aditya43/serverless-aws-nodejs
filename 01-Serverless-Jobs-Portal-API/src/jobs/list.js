const jobs = [
    {
        id: 1,
        title: 'ReactJS Developer'
    },
    {
        id: 2,
        title: 'NodeJS Developer'
    }
];

module.exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(jobs)
    };
};