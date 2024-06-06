import { Part } from "../models";

export async function create({name}) {
    const part = new Part({
        name
    });
    await part.save();
    return part;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {name: q}),
    };

    const parts = (
        await Part.find(filter)
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order})
    );
    const total = await Part.countDocuments(filter);
    return {total, page, per_page, parts};
}

export async function details(partId) {
    const part = await Part.findById(partId);
    return part;
}

export async function update(part, {name}) {
    part.name = name;
    await part.save();
    return part;
}


export async function remove(part) {
    await Part.deleteOne({_id: part._id});
}
