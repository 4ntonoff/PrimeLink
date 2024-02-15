const VCodeExpiresAt = new Date();
VCodeExpiresAt.setMinutes(VCodeExpiresAt.getMinutes() + 2);

function generateCode() {
    return Math.floor(100000 + Math.random() * 900000)
}

module.exports = generateCode