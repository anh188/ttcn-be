import { Surname } from "../models";

export async function create({name}) {
    const surname = new Surname({
        name
    });
    await surname.save();
    return surname;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {name: q}),
    };

    const surnames = (
        await Surname.find(filter)
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order})
    );
    const total = await Surname.countDocuments(filter);
    return {total, page, per_page, surnames};
}

export async function details(surnameId) {
    const surname = await Surname.findById(surnameId);
    return surname;
}

export async function update(surname, {name}) {
    surname.name = name;
    await surname.save();
    return surname;
}


export async function remove(surname) {
    await Surname.deleteOne({_id: surname._id});
}
