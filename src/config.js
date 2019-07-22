const port = process.env.OPENSHIFT_NODEJS_PORT || 5001;
const hostname = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

export default (() => {
    return {
        hostname,
        port
    };
})();
