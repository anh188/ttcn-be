import { Surface } from "../models";

export async function create({name}) {
    const surface = new Surface({
        name
    });
    await surface.save();
    return surface;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {name: q}),
    };

    const surfaces = (
        await Surface.find(filter)
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order})
    );
    const total = await Surface.countDocuments(filter);
    return {total, page, per_page, surfaces};
}

export async function details(surfaceId) {
    const surface = await Surface.findById(surfaceId);
    return surface;
}

export async function update(surface, {name}) {
    surface.name = name;
    await surface.save();
    return surface;
}


export async function remove(surface) {
    await Surface.deleteOne({_id: surface._id});
}
