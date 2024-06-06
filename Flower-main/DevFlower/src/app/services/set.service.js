import { Set } from "../models";

export async function create({name}) {
    const set = new Set({
        name
    });
    await set.save();
    return set;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {name: q}),
    };

    const sets = (
        await Set.find(filter)
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order})
    );
    const total = await Set.countDocuments(filter);
    return {total, page, per_page, sets};
}

export async function details(setId) {
    const set = await Set.findById(setId);
    return set;
}

export async function update(set, {name}) {
    set.name = name;
    await set.save();
    return set;
}


export async function remove(set) {
    await Set.deleteOne({_id: set._id});
}
