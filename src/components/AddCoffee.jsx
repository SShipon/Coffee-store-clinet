import React from 'react';

const AddCoffee = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:w-1/2 w-full">
    <div className="card bg-base-100 w-full shadow-2xl">
      <div className="card-body space-y-4">
        <h2 className="text-2xl font-bold text-center">Add New Coffee</h2>

        {/* Row 1: Name & Chef */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="label">Name</label>
            <input type="text" className="input input-bordered w-full" placeholder="Coffee Name" />
          </div>
          <div className="w-full">
            <label className="label">Chef</label>
            <input type="text" className="input input-bordered w-full" placeholder="Chef Name" />
          </div>
        </div>

        {/* Row 2: Supplier & Taste */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="label">Supplier</label>
            <input type="text" className="input input-bordered w-full" placeholder="Supplier" />
          </div>
          <div className="w-full">
            <label className="label">Taste</label>
            <input type="text" className="input input-bordered w-full" placeholder="Taste" />
          </div>
        </div>

        {/* Row 3: Category & Details */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="label">Category</label>
            <input type="text" className="input input-bordered w-full" placeholder="Category" />
          </div>
          <div className="w-full">
            <label className="label">Details</label>
            <input type="text" className="input input-bordered w-full" placeholder="Details" />
          </div>
        </div>

        {/* Row 4: Phone Number */}
        <div>
          <label className="label">Phone</label>
          <input type="text" className="input input-bordered w-full" placeholder="Phone Number" />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button className="btn btn-neutral w-full ">Add Coffee</button>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default AddCoffee;