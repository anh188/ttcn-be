import { LINK_STATIC_URL } from "@/configs";
import { Flower } from "../models";
import { FileUpload } from "@/utils/types";

export async function create({ name, science_name, size, characteristics, pollen_grain_images, flower_images, set_id, surname_id, surface_id, part_id, aperture_id, genus_id, shape_id }) {


    if (Array.isArray(pollen_grain_images)) {
        for (let i = 0; i < pollen_grain_images.length; i++) {
            pollen_grain_images[i] = pollen_grain_images[i].save();
        }
    } else {
        pollen_grain_images = pollen_grain_images.save();
    }


    if (Array.isArray(flower_images)) {
        for (let i = 0; i < flower_images.length; i++) {
            flower_images[i] = flower_images[i].save();
        }
    } else {
        flower_images = flower_images.save();
    }


    const flower = new Flower({
        name,
        science_name,
        size,
        characteristics,
        pollen_grain_images,
        flower_images,
        set_id,
        surname_id,
        surface_id,
        part_id,
        aperture_id,
        genus_id,
        shape_id
    });
    await flower.save();
    return flower;
}

export async function filter({q, page, per_page, field, sort_order}) {
    q = q ? {$regex: q, $options: "i"} : null;

    const filter = {
        ...(q && {$or: [{name: q}, {science_name:q}]}),
    };

    const flowers = (
        await Flower.find(filter)
            .populate("set_id", "name")
            .populate("surname_id", "name")
            .populate("surface_id", "name")
            .populate("part_id", "name")
            .populate("aperture_id", "name")
            .populate("genus_id", "name")
            .populate("shape_id", "name")
            .skip((page - 1) * per_page)
            .limit(per_page)
            .sort({[field]: sort_order}))
        .map((flower) => {
            if (Array.isArray(flower.flower_images)) { 
                for( let i=0; i<flower.flower_images.length; i++ ) {
                    flower.flower_images[i] = LINK_STATIC_URL + flower.flower_images[i];
                }
            }

            if (Array.isArray(flower.pollen_grain_images)) { 
                for( let i=0; i<flower.pollen_grain_images.length; i++ ) {
                    flower.pollen_grain_images[i] = LINK_STATIC_URL + flower.pollen_grain_images[i];
                }
            }
            return flower;
        });
            
    const total = await Flower.countDocuments(filter);
    return {total, page, per_page, flowers};
}

export async function details(flowerId) {
    const flower = await Flower.findById(flowerId)
        .populate("set_id", "name")
        .populate("surname_id", "name")
        .populate("surface_id", "name")
        .populate("part_id", "name")
        .populate("aperture_id", "name")
        .populate("genus_id", "name")
        .populate("shape_id", "name");
    return flower;
}

export async function update(flower, { name, science_name, size, characteristics, pollen_grain_images, flower_images, set_id, surname_id, surface_id, part_id, aperture_id, genus_id, shape_id }) {
    if (Array.isArray(pollen_grain_images)) {
        for (let i = 0; i < pollen_grain_images.length; i++) {
            if (pollen_grain_images[i] && flower.pollen_grain_images[i]) {
                FileUpload.remove(flower.pollen_grain_images[i]);
            }
            if (pollen_grain_images[i]) {
                flower.pollen_grain_images[i] = pollen_grain_images[i].save("images");
            }
        }
    }

    if (Array.isArray(flower_images)) {
        for (let i = 0; i < flower_images.length; i++) {
            if (flower_images[i] && flower.flower_images[i]) {
                FileUpload.remove(flower.flower_images[i]);
            }
            if (flower_images[i]) {
                flower.flower_images[i] = flower_images[i].save("images");
            }
        }
    }

    console.log(pollen_grain_images,flower_images );
    
    flower.name = name;
    flower.science_name = science_name;
    flower.size = size;
    flower.characteristics = characteristics;
    flower.pollen_grain_images = pollen_grain_images.map(item=> item.filepath);
    flower.flower_images = flower_images.map(item=> item.filepath);
    flower.surname_id = surname_id;
    flower.surface_id = surface_id;
    flower.part_id = part_id;
    flower.set_id = set_id;
    flower.aperture_id = aperture_id;
    flower.genus_id = genus_id;
    flower.shape_id = shape_id;
    return await flower.save();
}


export async function remove(flower) {
    await Flower.deleteOne({_id: flower._id});
}
