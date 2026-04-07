import mogoose from "mongoose";

const sectionSchema = new mogoose.Schema({
    courseId: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "course",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Section = mogoose.model("section", sectionSchema);

export default Section;
