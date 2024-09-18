const mongoose = require('mongoose');
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    hotel_id: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomType: {
        type: Schema.Types.ObjectId,
        ref: 'RoomType', // Liên kết với Room schema
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    isAvailable: {
        type: Boolean,
        default: true, // Mặc định phòng còn trống
    }
},
    {
        timestamps: true
    }
)

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;