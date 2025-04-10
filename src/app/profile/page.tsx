"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UserCircle2, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Karla } from "next/font/google";
const karla = Karla({
    subsets: ["latin"],
    weight: "700",
  });
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  rollNumber: z.string().min(8, "Roll number must be at least 8 characters"),
  contactNumber: z.string().min(8, "Contact number must be at least 8 characters"),
  year: z.string().min(1, "Please select a year"),
  department: z.string().min(1, "Please select a department"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function EditProfile() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      rollNumber: "",
      contactNumber: "",
      year: "",
      department: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
      setSubmitSuccess(true);
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="mb-4 sm:mb-8 flex items-center">
          <Button 
            variant="ghost" 
            className="text-white hover:text-red-400"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">HOME</span>
          </Button>
        </div>
        
        <Card className="mx-auto max-w-2xl bg-black/40 backdrop-blur-sm border-none text-white">
          <CardHeader className="space-y-2 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <CardTitle className={`${karla.className} text-4xl sm:text-2xl font-extrabold`}>Edit profile</CardTitle>
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-800 flex items-center justify-center">
                <UserCircle2 className="h-8 w-8 sm:h-12 sm:w-12" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" className="bg-gray-800/50 text-sm sm:text-base" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" className="bg-gray-800/50 text-sm sm:text-base" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" className="bg-gray-800/50 text-sm sm:text-base" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rollNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Roll Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter roll number" className="bg-gray-800/50 text-sm sm:text-base" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter contact number" className="bg-gray-800/50 text-sm sm:text-base" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Year</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-800/50 text-sm sm:text-base">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="1st">1st Year</SelectItem>
                            <SelectItem value="2nd">2nd Year</SelectItem>
                            <SelectItem value="3rd">3rd Year</SelectItem>
                            <SelectItem value="4th">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Department</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-800/50 text-sm sm:text-base">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-900 text-white">
                            <SelectItem value="ece">ECE</SelectItem>
                            <SelectItem value="cse">CSE</SelectItem>
                            <SelectItem value="mech">MECH</SelectItem>
                            <SelectItem value="civil">CIVIL</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className="bg-gray-800/50 text-sm sm:text-base pr-10"
                            {...field}
                          />
                        </FormControl>
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                {submitSuccess && (
                  <div className="bg-green-500/20 text-green-400 p-3 rounded-md text-sm">
                    Profile updated successfully!
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="outline" 
                    type="button" 
                    className="hover:bg-red-500/20 hover:text-red-500 order-2 sm:order-1"
                    onClick={() => form.reset()}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-red-500 hover:bg-red-600 order-1 sm:order-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}