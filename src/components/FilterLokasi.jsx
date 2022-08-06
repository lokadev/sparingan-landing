import React from "react";
import SelectOption from "./SelectOption";

const FilterLokasi = () => {
    return (
        <div className="lokasi">
            <h1 className="lokasi__title">Cari Lokasi</h1>
            <form className="lokasi__form">
                    <SelectOption label='Provinsi' placeholder='Cari Provinsi' classState='lokasi__input-grup' />
                    <SelectOption label='Kota' placeholder='Cari Kota' classState='lokasi__input-grup' />
                    <SelectOption label='Kecamatan' placeholder='Cari Kecamatan' classState='lokasi__input-grup' />
            </form>
            <div className="lokasi__cta">
                <button type="button" className="cancel">Cancel</button>
                <button type="submit" className="submit">Simpan</button>
            </div>
        </div>
    )
}

export default FilterLokasi;