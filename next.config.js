/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3-ap-southeast-1.amazonaws.com', "assets.loket.com", "loket-production-sg.s3.ap-southeast-1.amazonaws.com"],
    },
}

module.exports = nextConfig
