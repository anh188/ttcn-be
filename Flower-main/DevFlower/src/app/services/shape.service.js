import { Shape } from "../models";

export async function create({name}) {
    const shape = new Shape({
        name
    });
    await shape.save();
    return shape;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {name: q}),
    };

    const shapes = (
        await Shape.find(filter)
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order})
    );
    const total = await Shape.countDocuments(filter);
    return {total, page, per_page, shapes};
}

export async function details(shapeId) {
    const shape = await Shape.findById(shapeId);
    return shape;
}

export async function update(shape, {name}) {
    shape.name = name;
    await shape.save();
    return shape;
}


export async function remove(shape) {
    await Shape.deleteOne({_id: shape._id});
}
