import { Aperture } from "../models";

export async function create({name}) {
    const aperture = new Aperture({
        name
    });
    await aperture.save();
    return aperture;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {name: q}),
    };

    const apertures = (
        await Aperture.find(filter)
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order})
    );
    const total = await Aperture.countDocuments(filter);
    return {total, page, per_page, apertures};
}

export async function details(apertureId) {
    const aperture = await Aperture.findById(apertureId);
    return aperture;
}

export async function update(aperture, {name}) {
    aperture.name = name;
    await aperture.save();
    return aperture;
}


export async function remove(aperture) {
    await Aperture.deleteOne({_id: aperture._id});
}
