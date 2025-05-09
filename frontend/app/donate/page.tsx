"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin, Upload, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import { categories } from "@/lib/mock-data"

export default function DonatePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<string>(format(new Date().setHours(new Date().getHours() + 2), "HH:mm"))
  const [images, setImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState<"low" | "medium" | "high">("medium")
  const [dietary, setDietary] = useState<string[]>([])
  const [location, setLocation] = useState("")
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  const router = useRouter()
  const { toast } = useToast()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setImages([...images, ...newFiles])

      // Create preview URLs
      const newUrls = newFiles.map((file) => URL.createObjectURL(file))
      setImageUrls([...imageUrls, ...newUrls])
    }
  }

  const handleUseCurrentLocation = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)

        // Simulate reverse geocoding
        setLocation("Current Location (detected)")

        toast({
          title: "Location detected",
          description: "Your current location has been set.",
        })
      } catch (error) {
        toast({
          title: "Location Error",
          description: "Unable to get your current location",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "Location Error",
        description: "Geolocation is not supported by your browser",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Success",
      description: "Food donation listed successfully!",
    })

    // Redirect to browse page
    router.push("/browse")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container flex-grow mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-semibold mb-6">Donate Food</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="e.g., Fresh Produce"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mb-4"
            />

            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the food you're donating"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mb-4"
            />

            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.name}>
                    {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Label>Quantity</Label>
            <RadioGroup
              defaultValue={quantity}
              className="flex gap-2 mb-4"
              onValueChange={(value) => setQuantity(value as "low" | "medium" | "high")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="r1" />
                <Label htmlFor="r1">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="r2" />
                <Label htmlFor="r2">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="r3" />
                <Label htmlFor="r3">High</Label>
              </div>
            </RadioGroup>

            <Label>Dietary Information</Label>
            <div className="flex flex-wrap gap-2 mb-4">
              <div>
                <Input
                  type="checkbox"
                  id="vegetarian"
                  className="peer sr-only"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDietary([...dietary, "vegetarian"])
                    } else {
                      setDietary(dietary.filter((item) => item !== "vegetarian"))
                    }
                  }}
                />
                <Label
                  htmlFor="vegetarian"
                  className="inline-flex items-center justify-between w-full p-2 bg-white border border-gray-200 rounded-md cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-50"
                >
                  Vegetarian
                </Label>
              </div>
              <div>
                <Input
                  type="checkbox"
                  id="vegan"
                  className="peer sr-only"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDietary([...dietary, "vegan"])
                    } else {
                      setDietary(dietary.filter((item) => item !== "vegan"))
                    }
                  }}
                />
                <Label
                  htmlFor="vegan"
                  className="inline-flex items-center justify-between w-full p-2 bg-white border border-gray-200 rounded-md cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-50"
                >
                  Vegan
                </Label>
              </div>
              <div>
                <Input
                  type="checkbox"
                  id="gluten-free"
                  className="peer sr-only"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDietary([...dietary, "gluten-free"])
                    } else {
                      setDietary(dietary.filter((item) => item !== "gluten-free"))
                    }
                  }}
                />
                <Label
                  htmlFor="gluten-free"
                  className="inline-flex items-center justify-between w-full p-2 bg-white border border-gray-200 rounded-md cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-50"
                >
                  Gluten-Free
                </Label>
              </div>
            </div>
          </div>

          {/* Location and Time */}
          <div>
            <Label htmlFor="location">Location</Label>
            <div className="relative mb-4">
              <Input
                type="text"
                id="location"
                placeholder="Enter a location or address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pr-10"
                required
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleUseCurrentLocation}
                className="absolute right-1 top-1 h-8"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Use Current Location
              </Button>
            </div>

            <div className="flex gap-4 mb-4">
              <div>
                <Label>Available Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="w-32"
                  />
                  <Clock className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>

            <Label htmlFor="images">Images (Optional)</Label>
            <Input type="file" id="images" multiple accept="image/*" onChange={handleImageUpload} className="mb-4" />

            {/* Image Preview */}
            {imageUrls.length > 0 && (
              <div className="mb-4">
                <Label className="mb-2 block">Image Previews</Label>
                <div className="flex flex-wrap gap-2">
                  {imageUrls.map((url, index) => (
                    <div key={index} className="relative w-24 h-24">
                      <img
                        src={url || "/placeholder.svg"}
                        alt={`Preview ${index + 1}`}
                        className="rounded-md object-cover w-full h-full"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                        onClick={() => {
                          const newImages = [...images]
                          newImages.splice(index, 1)
                          setImages(newImages)

                          const newUrls = [...imageUrls]
                          URL.revokeObjectURL(newUrls[index])
                          newUrls.splice(index, 1)
                          setImageUrls(newUrls)
                        }}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Donation
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
