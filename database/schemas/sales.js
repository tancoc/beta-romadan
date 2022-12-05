import mongoose from 'mongoose'

const SaleSchema = mongoose.Schema(
	{
		total_sales: {
			type: Number,
			default: 0
		}
	},
	{ timestamps: true }
)

const Sales = mongoose.models.Sales || mongoose.model('Sales', SaleSchema)

export default Sales
